const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    let tag = await Tag.findAll({
      include: [Product]
    })
    res.json(tag)
  } catch (error) {
    res.json(error)
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    let tag = await Tag.findByPk(req.params.id, {
      include: [Product]
    })
    res.json(tag)
  } catch (error) {
    res.json(error)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    let newTag = await Tag.create(req.body)
    res.json(newTag)
  } catch (error) {
    res.json(error)
  }
});

router.put('/:id', async (req, res) => {
  try {
    let updateTag = await Tag.update(req.body, {where:{id:req.params.id}})
    res.json(updateTag)
   } catch (error) {
    res.json(error)
    
   }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    let deleteTag = await Tag.destroy({where:{id:req.params.id}})
    res.json(deleteTag)
  } catch (error) {
    res.json(error)
  }
  // delete on tag by its `id` value
});

module.exports = router;
