const tools = [
  { id: 1, name: "awlad" },
  { id: 2, name: "Shourov" },
  { id: 3, name: "Mehedi" },
];

module.exports.getAllTools = (req, res, next) => {
  const { limit, page } = req.query;
  // console.log(limit, page);
  res.json(tools.slice(0, limit));
};

module.exports.postAllTools = (req, res, next) => {
  tools.push(req.body);
  res
    // .status(200)
    .send(
      // {
      // success: true,
      // message: "Successful",
      // data: foundTools,
      // }
      tools
    );
  // res.status(500).send({
  //   success: false,
  //   error: "Internal Server Error",
  // });
};

module.exports.getToolsDetail = (req, res, next) => {
  const { id } = req.params;
  const filter = { _id: id };
  const fountTools = tools.find((tool) => tool.id === Number(id));
  res.send(fountTools);
};
module.exports.updateTools = (req, res, next) => {
  // const newData = req.body;
  const { id } = req.params;
  const filter = { _id: id };
  const newData = tools.find((tool) => tool.id === Number(id));
  newData.id = id;
  newData.name = req.body.name;
  res.send(newData);
};
module.exports.deleteTools = (req, res, next) => {
  const { id } = req.params;
  const filter = { _id: id };
  const deleteTools = tools.filter((tool) => tool.id !== Number(id));
  res.send(deleteTools);
};
