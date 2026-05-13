const ClassModel = require("./class.model");

exports.createClass = async (data) => {
  const existingClass = await ClassModel.findOne({
    where: {
      className: data.className,
      arm: data.arm,
      session: data.session,
      term: data.term,
    },
  });

  if (existingClass) {
    throw new Error("Class already exists");
  }

  return await ClassModel.create(data);
};

exports.getClasses = async () => {
  return await ClassModel.findAll({
    order: [["createdAt", "DESC"]],
  });
};
