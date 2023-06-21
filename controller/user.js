import Contact from "../model/model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Contact.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const user = new Contact(req.body);
    await user.save();
    res.send("User added successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await Contact.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.send("User deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, contact } = req.body;
    await Contact.findByIdAndUpdate(req.params.id, { name, email, contact });
    res.send("User updated successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
