const { Level } = require("level");
const db = new Level("chars-db");

class CharsController {
  async getLastChar(req, res) {
    const options = {
      reverse: true,
      limit: 1,
    };
    const lastItem = await db.iterator(options).all();
    res.status(200).send(lastItem);
  }

  async getChars(req, res) {
    const page = req.body?.page || 1;
    const pageSize = 10;
    const startKey = (page - 1) * pageSize;
    const endKey = startKey + pageSize - 1;
    const options = { limit: pageSize, gte: startKey, lte: endKey };
    const items = {}

    for await (const [key, value] of db.iterator(options)) {
      items[key] = JSON.parse(value);
    }
    res.status(200).send(items);
  }

  /*
  async getChars(req, res) {
    const levelArray =  await db.iterator().all()
    const levelMap = levelArray.reduce((acc, val) => assoc(val[0], JSON.parse(val[1]), acc), {});
    res.status(200).send(levelMap);
  }
  */

  addChar(req, res) {
    db.put(
      req.body.id,
      JSON.stringify({
        ...req.body,
        image: req.file.path.replace(/\\/g, `/`).replace("public", "/static"),
      }),
      function (err) {
        if (err) {
          res.status(404).send({ value: err });
        }
        db.get(req.body.id, function (err, value) {
          if (err) {
            res.status(404).send({ value: err });
          }
          res.status(200).send(value);
        });
      }
    );
  }

  editChar(req, res) {
    db.put(req.body.id, JSON.stringify(req.body.values), function (err) {
      if (err) {
        res.status(404).send({ value: err });
        console.log(err, "ERROR");
      }
      db.get(req.body.id, function (err, value) {
        if (err) {
          res.status(404).send({ value: err });
        }
        res.status(200).send(value);
      });
    });
  }
  deleteChar(req, res) {
    db.del(req.body.id, function (err) {
      if (err) {
        res.status(404).send({ value: err });
        console.log(err, "ERROR");
      } else {
        res.status(200).send({ id: req.body.id });
      }
    });
  }
}

const charsController = new CharsController();
module.exports = {
  charsController,
};
