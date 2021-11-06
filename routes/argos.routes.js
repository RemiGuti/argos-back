const connection = require("../db-config");
const router = require("express").Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM argos', (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving argos from database');
      } else {
        res.json(result);
      }
    });
  });

router.get('/:id', (req, res) => {
  const playerId = req.params.id;
  connection.query(
    'SELECT * FROM argos WHERE id = ?',
    [playerId],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving argo from database');
      } else {
        if (results.length) res.json(results[0]);
        else res.status(404).send('Argo not found');
      }
    }
  );
});

router.post('/', (req, res) => {
  const { argo_name } = req.body;
  connection.query(
    'INSERT INTO argos (argo_name) VALUES (?)',
    [argo_name],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error saving the argo');
      } else {
        const id = result.insertId;
        const createdArgo = { argo_name };
        res.status(201).json(createdArgo);
      }
    }
  );
});

router.delete('/:id', (req, res) => {
  connection.query(
    'DELETE FROM argos WHERE id = ?',
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error deleting an argos');
      } else {
        if (result.affectedRows) res.status(200).send('🎉 Argos deleted!');
        else res.status(404).send('Argos not found.');
      }
    }
  );
});

module.exports = router;