module.exports = class extends think.Logic {
  indexAction() {

  }

  currentAction() {
    this.rules = {
      id: { required: true }
    };
  }
};