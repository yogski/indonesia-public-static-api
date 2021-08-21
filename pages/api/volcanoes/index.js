import volcanoes from '../../../data_source/indonesia_volcanoes.json'
import { objectOnlyContainsKeys } from '../../../helpers/utils'

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export default function handler(req, res) {
  let result = volcanoes;

  if (req.query['name']) {
    result = result.filter((mountain) => {
      return mountain.nama.toLowerCase().includes(req.query['name'].toLowerCase());
    });
  }

  if (req.query['type']) {
    result = result.filter((mountain) => {
      return mountain.bentuk.toLowerCase().includes(req.query['type'].toLowerCase());
    });
  }

  if (req.query['min_height']) {
    result = result.filter((mountain) => {
      return parseInt(mountain.tinggi_meter) >= req.query['min_height']
    });
  }

  if (req.query['max_height']) {
    result = result.filter((mountain) => {
      return parseInt(mountain.tinggi_meter) <= req.query['max_height']
    });
  }

  res.status(200).json(result);
  return;
}
