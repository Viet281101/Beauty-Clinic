# MongoDB

## Start & active Mongo
- Active
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

- Restart
```bash
sudo systemctl restart mongod
```

### Check status MongoDB
```bash
sudo systemctl status mongod
```

## Check MongoDB Shell
```bash
mongosh
```

- Login with admin :
```bash
mongosh -u admin -p adminpassword --authenticationDatabase admin
```

- Switch to beauty_clinic:
```bash
use beauty_clinic
```

- Create a user for backend:
```bash
db.createUser({
    user: "beauty_user",
    pwd: "securepassword",
    roles: [{ role: "readWrite", db: "beauty_clinic" }]
})
```

- Exit & return with 
```bash
mongosh -u beauty_user -p securepassword --authenticationDatabase beauty_clinic
```

```bash
use beauty_clinic
```

- Insert a user for debug:
```bash
db.users.insertOne({
    name: "Test User",
    email: "testuser@example.com",
    password: "hashedpassword",
    createdAt: new Date()
})
```

- Check data:
```bash
db.users.find()
```


