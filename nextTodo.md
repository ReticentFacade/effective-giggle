1. You need to define a role model like in your `models/Role.js`

```
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Role;
```

2. Then you need to associate that role model with your user model 'model/UserModel.js'

```
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./Role');

const User = sequelize.define('User', {
  // your user model's fields

  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 2, // default role ID for normal users
  },
});

User.belongsTo(Role, { foreignKey: 'roleId' });
Role.hasOne(User, { foreignKey: 'id' });

module.exports = User;

```

3. You'll seed your "Role" table 'seeders/create-admin-role.js'

```
module.exports = {
up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('Roles', [
{
name: 'admin',
createdAt: new Date(),
updatedAt: new Date(),
},
]);
},

down: async (queryInterface, Sequelize) => {
await queryInterface.bulkDelete('Roles', null, {});
},
};
```

4. A middleware to check admin access 'middleware/checkAdmin.js'

```

const { User, Role } = require('../models');

const checkAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      include: [{ model: Role }],
    });

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (user.Role.name !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = checkAdmin;
```

**5**. Protect the user_details route with admin check middleware

```
const express = require('express');
const router = express.Router();
const checkAdmin = require('../middleware/checkAdmin');

// accessible only by admin
router.get('/api/user_details', checkAdmin, (req, res) => {
  res.json({ message: 'Admin access granted!' });
});

module.exports = router;

```

---

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./Role');

const User = sequelize.define('User', {
// your user model's fields

roleId: {
type: DataTypes.INTEGER,
allowNull: false,
defaultValue: 2, // default role ID for normal users
},
});

isme jo tere user ki default fields h wo saath hongi na
