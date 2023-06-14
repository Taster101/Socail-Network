const { User, Thought } = require("../models");



module.exports = {
  // Get all courses
  async getThought(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.courseId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a course
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a course
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.courseId });

      if (!thought) {
        res.status(404).json({ message: 'No course with tha' });
      }
      //await.deleteMany({ _id: { $in: course.students } });
      res.json({ message: '' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a course
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.courseId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: '' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
