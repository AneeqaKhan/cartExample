import {Dimensions} from 'react-native';

const Dimension = size => {
  const {width} = Dimensions.get('window');
  const designBenchmark = 768;
  return (size / designBenchmark) * width;
};

export default Dimension;
