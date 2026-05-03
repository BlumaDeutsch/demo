const { Router } = require("express");
const db = require("../config");
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello from the API!');
});

// user routes 
router.get('/users', async (req, res) => { // get all users
    try {
        const users = await db('users').select('*');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/users/:id', async (req, res) => { // get user by id
    try {
        const userId = req.params.id;
        const user = await db('users').where({ id: userId }).first();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/users', async (req, res) => { // create new user 
    try {
        const { username, email, password_hash } = req.body;
        const [newUserId] = await db('users').insert({ username, email, password_hash }).returning('id');
        res.status(201).json({ id: newUserId, username, email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/users/:id', async (req, res) => { // update user
    try {
        const userId = req.params.id;
        const { username, email, password_hash } = req.body;
        await db('users').where({ id: userId }).update({ username, email, password_hash });
        res.json({ message: `User ${userId} updated successfully!` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/users/:id', async (req, res) => { // delete user
    try {
        const userId = req.params.id;
        await db('users').where({ id: userId }).del();
        res.json({ message: `User ${userId} deleted successfully!` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;