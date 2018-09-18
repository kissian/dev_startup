const express = require('express');
const Memo = require('../../models/Memo');
const mongoose = require('mongoose');

module.exports = (app) => {
  /* 
    WRITE MEMO: POST /api/memo
    BODY SAMPLE: { contents: "sample "}
    ERROR CODES
        1: NOT LOGGED IN
        2: EMPTY CONTENTS
  */
  app.post('/api/memo', (req, res, next) => {
    const { body: {
      contents,
    } } = req;
    const { session: { loginInfo: { firstName } } } = req;
    // LOGIN CHECK STATUS
    if(typeof req.session.loginInfo === 'undefined') {
      return res.send({
        success: false,
        error: "Error not loggend"
      });
    }
    // CHECK CONTENTS VALID
    if(typeof req.body.contents !== 'string') {
      return res.send({
        success: false,
        error: "Error empit contents !== 'string'"
      });
    }
    if(req.body.contents === "") {
      return res.send({
        success: false,
        error: "Error empit contents === ''"
      });
    }
    console.log(req.session);
    let newMemo = new Memo({
      writer: firstName,
      contents
    });

    newMemo.save((err, memo) => {
      if(err) {
        res.send({
          success: false,
          error: "Error server"
        });
      }
      return res.send({
        success: true,
        message: "메모가 작성됬어? 퇴근할래?"
      })
    })
  });

  app.put('/api/memo/:id', (req, res, next) => {
    /*
    MODIFY MEMO: PUT /api/memo/:id
    BODY SAMPLE: { contents: "sample "}
    ERROR CODES
        1: INVALID ID,
        2: EMPTY CONTENTS
        3: NOT LOGGED IN
        4: NO RESOURCE
        5: PERMISSION FAILURE
    */

    // CHECK MEMO ID VALIDITY
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.send({
        success: false,
        error: "invalid id!"
      });
    }
    // CHECK CONTENTS VALID
    if(typeof req.body.contents !== 'string') {
      return res.send({
        success: false,
        error: "Error empit contents !== 'string'"
      });
    }
    if(req.body.contents === "") {
      return res.send({
        success: false,
        error: "Error empit contents === ''"
      });
    }
    // LOGIN CHECK
    if(!typeof req.session.loginInfo === 'undefined') {
      return send({
        success: false,
        error: "not loggend"
      });
    }
    // FIND MEMO
    Memo.findById(req.params.id, (err, memo) => {
      if(err) {
        res.send({
          success: false,
          error: "memo findId Error server"
        });
      }
      if(!memo) {
        return res.send({
          success: false,
          error: "no resource 자원이 없다"
        });
      }
      // IF EXISTS, CHECK WRITER
      if(memo.writer != req.session.loginInfo.username) {
        return res.status(403).json({
            error: "수정 허가를 내어줄수 없다.",
            code: 5
        });
      }

      // MODIFY AND SAVE ID DATABASE
      memo.contents = req.body.contents;
      memo.date.deited = new DataCue();
      memo.is_edited = true;

      memo.save((err, memo) => {
        if(err) {
          res.send({
            success: false,
            error: "memo edit save Error server"
          });
        }
        return res.send({
          success: true,
          message: "메모 수정이 완료되었습니다.",
          memo
        })
      })
    })
  });

  app.delete('/api/memo/:id', (req, res, next) => {
    // CHECK MEMO ID VALIDITY
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.send({
        success: false,
        error: "invalid id!"
      });
    }
    // LOGIN CHECK
    if(!typeof req.session.loginInfo === 'undefined') {
      return send({
        success: false,
        error: "not loggend"
      });
    }
    // FIND MEMO AND CHECK FOR WRITER
    console.log(req.params.id);
    Memo.findById(req.params.id, (err, memo) => {
      if(err) {
        res.send({
          success: false,
          error: "Error server"
        });
      }

      if(!memo) {
        return res.send({
          success: false,
          error: "no resource 자원이 없다"
        });
      }
      if(memo.writer != req.session.loginInfo.firstName) {
        return res.send({
          success: false,
          error: "삭제 허가를 내어줄수 없다."
        });
      }

      Memo.remove({ _id: req.params.id}, err => {
        if(err) {
          res.send({
            success: false,
            error: "Error server"
          });
        }

        res.send({
          success: true,
          message: "삭제되었단다~"
        })
      })
    })
  });

  app.get('/api/memo', (req, res, next) => {
    Memo.find()
    .sort({"_id": -1})
    .limit(6)
    .exec((err, memos) => {
      if(err) throw err;
      res.json(memos);
    })
  });
}