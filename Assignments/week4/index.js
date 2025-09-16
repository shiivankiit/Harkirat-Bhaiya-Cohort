const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const router = Router();

let todos = [];  // array to store all to-do object temporiarly.
let idCounter = 1;//geaves unique id to each to-do.

// Create a todo
router.post('/todos', (req, res) => {
    const { title, description } = req.body;//{title and desc} is the properties of json body
    const todo = { id: idCounter++, title, description };
    todos.push(todo);
    res.status(201).json(todo);
    //.json(todo) sends the todo object back to the client.
});

// Update a todo
router.put('/', adminMiddleware, (req, res) => {
    const { id, title, description } = req.body;
    const todo = todos.find(t => t.id === parseInt(id));
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    res.json(todo);
});

// Delete all todos
router.delete('/', adminMiddleware, (req, res) => {
    todos = [];
    res.json({ message: "All todos deleted" });
});

// Delete todo by ID
router.delete('/:id', adminMiddleware, (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({ message: `Todo ${id} deleted` });
});

// Get all todos
router.get('/', adminMiddleware, (req, res) => {
    res.json(todos);
});

// Get todo by ID
router.get('/:id', adminMiddleware, (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
});

module.exports = router;
