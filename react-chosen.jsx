ReactChosen = React.createClass({
  propTypes: {
    chosenOpts: React.PropTypes.object,
    selectProps: React.PropTypes.object,
    value: React.PropTypes.any,
    options: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func
  },
  select(){
    return $(ReactDOM.findDOMNode(this.refs.select))
  },
  componentDidMount() {
    var opts = _.extend({}, this.props.chosenOpts);
      this.select()
      .chosen(opts)
      .on('change', this.onChange)
      .val(this.props.value);
  },
  onChange(){
    this.props.onChange(this.select().val() || []);
  },
  componentDidUpdate(){
    this.select().trigger('chosen:updated').val(this.props.value);
  },
  noop(){},
  render() {
    return <div>
      <select {...this.props.selectProps} ref="select" value={this.props.value} onChange={this.noop}>
        {
          this.props.options.map(function(opt){
            return <option value={opt.value} key={opt.value}>{opt.label}</option>;
          })
        }
      </select>
    </div>;
  }
});
