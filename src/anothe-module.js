import _ from 'lodash';

export default function xx() {
  let newModule = _.join(['Another', 'module', 'loaded!'], ' ');

  console.log(newModule);
}
