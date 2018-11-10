const { Map, fromJS } = Immutable;

const data = fromJS({
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: 5
  }
});

const deserialized = data.toJS();
console.log(deserialized);

const getData = data.get('a');
console.log(getData);

const newData = data.set('a', 4);
console.log(newData.toJS());
console.log(deserialized);

const getDatas = data.getIn(['c','d']);
console.log(getDatas);

console.log(newData === data); // false

const newData2 = data.setIn(['c','d'], 10);
console.log(newData2.toJS());

const newData3 = data.mergeIn(['c'], {d: 10, e: 10});
const deserialized2 = newData3.toJS();
console.log(deserialized2);

// 성능상 merge보다 set 여러번 하는게 빠르다.

// List

const { List, Map, fromJS } = Immutable;
// const list = List([0,1,2,3,4]);
const list = List([
  Map({value: 1}),
  Map({value: 2})
]); // or

const list2 = fromJS([
  {value: 1},
  {value: 2}
]);

console.log(list.toJS());

const getList = list.get(0);
// console.log(getList);

const getInList = list.getIn([0, 'value']);
console.log(getInList);

// const newList = list.set(0, Map({value: 10}));
// console.log(newList.toJS())

const newList = list.setIn([0, 'value'], 10);
console.log(newList.toJS());

const newList2 = list.update(0, item => item.set('value', item.get('value') * 5));
console.log(newList2.toJS());

