import volcanoes from '../../../data_source/indonesia_volcanoes.json'

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export default function handler(req, res) {
  let result = volcanoes;
  const DEFAULT_LIMIT = 10;

  res.status(200).json({neaerst: "ok"});
  return;
}
