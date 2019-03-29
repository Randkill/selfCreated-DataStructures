var STACK = require('./stack');

var st = new STACK();

st.Push(1);
st.Push(2);
st.Push(2);
st.Push(2);
st.Push(2);
st.Push(2);
st.Push(2);
st.Push(2);
st.Push(2);
st.Push(2);


st.printStack();

st.Pop();
st.Pop();

st.Pop();
st.Pop();


st.printStack();
