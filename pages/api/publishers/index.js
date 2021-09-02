import publishers from '../../../data_source/indonesia_publishers.json';
import { publisherArea } from '../../../helpers/enums';

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export default function handler(req, res) {
  let result = publishers;

  if (req.query['name']) {
    result = result.filter((publisher) => {
      return publisher.penerbit.toLowerCase().includes(req.query['name'].toLowerCase());
    });
  }

  if (req.query['area']) {
    let selectedArea = [];
    let selectedPublishers = [];
    publisherArea.map((target) => {
      if (req.query['area'].includes(target.id)) {
        selectedArea.push(target.area);
      }
    })
    result.map((publisher) => {
      if (selectedArea.includes(publisher.wilayah)) {
        selectedPublishers.push(publisher);
      }
    })
    result = selectedPublishers;
  }

  if (req.query['registered_year_start']) {
    result = result.filter((publisher) => {
      return parseInt(publisher.tahun_masuk) >= req.query['registered_year_start']
    });
  }

  if (req.query['registered_year_end']) {
    result = result.filter((publisher) => {
      return parseInt(publisher.tahun_masuk) <= req.query['registered_year_end']
    });
  }

  if (req.query['count_only'] == true) {
    res.status(200).json({count: result.length});
    return;
  }

  res.status(200).json(result);
  return;
}
