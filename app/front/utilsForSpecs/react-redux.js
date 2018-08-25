import * as redux from 'react-redux';

redux.connect = (mapStateToProps, mapDispatchToProps) => (_component) => {
  const component = _component;
  component.mapStateToProps = mapStateToProps;
  component.mapDispatchToProps = mapDispatchToProps;
  return component;
};
