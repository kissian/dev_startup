const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {
   /*
   *  Signup
   */
  app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const {
      firstName, lastName, password
    } = body;
    let { email } = body;
    if(!firstName) {
      return res.send({
        success: false,
        error: "Error first name connot be blank."
      });
    }
    if(!lastName) {
      return res.send({
        success: false,
        error: "Error lastName connot be blank."
      });
    }
    if(!email) {
      return res.send({
        success: false,
        error: "Error email connot be blank."
      });
    }
    if(!password) {
      return res.send({
        success: false,
        error: "Error password connot be blank."
      });
    }

    email = email.toLowerCase();
    // steps:
    // 1. email 중복검사
    // 2. save
    User.find({
      email: email
    }, (err, prevUsers) => {
      if(err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      } else if(prevUsers.length > 0) {
        return res.send({
          success: false,
          message: "Error: Account already exist."
        });
      }

      // Save new user
      const newUser = new User();

      newUser.email = email;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if(err) {
          return res.send({
            success: false,
            message: "Error: Server error"
          });
        }
        return res.send({
          success: true,
          message: "Signed up"
        });
      })
    });
  });

  /*
   *  Login
   */
  app.post('/api/account/login', (req, res, next) => {
    const { body } = req;
    const {
      password,
    } = body;
    let {
      email,
    } = body;

    if(!email) {
      return res.send({
        success: false,
        message: "Error email connot be blank."
      });
    };
    if(!password) {
      return res.send({
        success: false,
        message: "Error password connot be blank."
      });
    };

    email = email.toLowerCase();

    User.find({
      email: email
    }, (err, users) => {
      if(err) {
        return res.send({
          success: false,
          message: "server error"
        });
      };
      if(users.length != 1) {
        return res.send({
          success: false,
          message: "user invialid 1"
        });
      };

      const user = users[0];
      if(!user.validPassword(password)) {
        return res.send({
          success: false,
          message: "user invialid 2"
        });
      };

      // corrct user
      const userSession = new UserSession();
      userSession.userId = users._id;
      userSession.save((err, doc) => {
        if(err) {
          return res.send({
            success: false,
            message: "server error"
          })
        }
        return res.send({
          success: true,
          message: "Valid Login !!",
          token: doc._id,
          firstName: users.firstName
        });
      });
    });
  });

  /*
   * Verify (검증)
   */
  app.get('/api/account/verify', (req, res, next) => {
    const { query: { token } } = req;
    UserSession.find({
      _id: token,
      isDeleted: false
    }, (err, session) => {
      if(err) {
        return res.send({
          success: false,
          message: "not get user token"
        })
      }
      if(session.length != 1) {
        return res.send({
          success: false,
          message: "not get session"
        })
      } else {
        return res.send({
          success: true,
          message: "🍼 Good!!!"
        })
      }
    })
  });
  /*
   * Logout
   */
  app.get('/api/account/logout', (req, res, next) => {
    const { query: { token } } = req;

    UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set:{
        isDeleted: true
      }
    }, null, (err, session) => {
      if(err) {
        return res.send({
          success: false,
          message: "not get user token"
        })
      }
      return res.send({
        success: true,
        message: "🍼 logout!! Good!!! 퇴근할까?"
      })
    })
  });
}