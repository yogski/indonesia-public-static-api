import heroes from '../../../data_source/indonesia_national_heroes.json'
import { objectOnlyContainsKeys } from '../../../helpers/utils'

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export default function handler(req, res) {
  if (objectOnlyContainsKeys(req.query, ['name'])) {
    let result = heroes.filter((person) => {
      return person.name.toLowerCase().includes(req.query['name'].trim().toLowerCase())
    });
    res.status(200).json(result);
    return;
  }

  if (objectOnlyContainsKeys(req.query, ['alive_in_start', 'alive_in_end'])) {
    let result = heroes.filter((person) => {
      return ((person.birth_year <= req.query['alive_in_end'] && person.death_year >= req.query['alive_in_end'])
      || (person.birth_year <= req.query['alive_in_start'] && person.death_year >= req.query['alive_in_start']));
    });
    res.status(200).json(result);
    return;
  }

  if (objectOnlyContainsKeys(req.query, ['q'])) {
    let result = heroes.filter((person) => {
      return (person.name.toLowerCase().includes(req.query['q'].toLowerCase()) || person.description.toLowerCase().includes(req.query['q'].toLowerCase()))
    });
    res.status(200).json(result);
    return;
  }

  if (objectOnlyContainsKeys(req.query, ['birth_year_start', 'birth_year_end'])) {
    let result = heroes.filter((person) => {
      return (person.birth_year <= req.query['birth_year_end'] && person.birth_year >= req.query['birth_year_start'])
    });
    res.status(200).json(result);
    return;
  }

  if (objectOnlyContainsKeys(req.query, ['death_year_start', 'death_year_end'])) {
    let result = heroes.filter((person) => {
      return (person.death_year <= req.query['death_year_end'] && person.death_year >= req.query['death_year_start'])
    });
    res.status(200).json(result);
    return;
  }

  if (objectOnlyContainsKeys(req.query, ['ascend_year_start', 'ascend_year_end'])) {
    let result = heroes.filter((person) => {
      return (person.ascension_year <= req.query['ascend_year_end'] && person.ascension_year >= req.query['ascend_year_start'])
    });
    res.status(200).json(result);
    return;
  }

  res.status(200).json(heroes);
  return;
}
