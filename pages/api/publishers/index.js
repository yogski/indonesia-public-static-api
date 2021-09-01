import publishers from '../../../data_source/indonesia_publishers.json'

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export default function handler(req, res) {
  let result = publishers;

  if (req.query['name']) {
    result = result.filter((publisher) => {
      return publisher.nama.toLowerCase().includes(req.query['name'].toLowerCase());
    });
  }

  if (req.query['type']) {
    result = result.filter((publisher) => {
      return publisher.bentuk.toLowerCase().includes(req.query['type'].toLowerCase());
    });
  }

  if (req.query['min_height']) {
    result = result.filter((publisher) => {
      return parseInt(publisher.tinggi_meter) >= req.query['min_height']
    });
  }

  if (req.query['max_height']) {
    result = result.filter((publisher) => {
      return parseInt(publisher.tinggi_meter) <= req.query['max_height']
    });
  }

  res.status(200).json(result);
  return;
}
