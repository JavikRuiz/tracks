const  { tracksModel } = require('../models')

/**
 * obtener una lista
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({})
    res.send({data})
}

/**
 * obtener un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {}

/**
 * crear un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    const { body } = req
    console.log(body)
    res.send({algo:1})
}

/**
 * actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItems = (req, res) => {}

/**
 * borrar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItems = (req, res) => {}

module.exports = { getItems, getItem, createItem, updateItems }