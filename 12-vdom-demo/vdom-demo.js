// virtual dom simulate
const vnode = {
  tag: "div",
  props: {
    onClick: ()=> alert("hello")
  },
  children: "click me"
};

// component simulate
const MyComponent = function(){
  return {
    tag: "div",
    props: {
      onClick: ()=> alert("component")
    },
    children: "click me"
  };
};

function renderer(vnode, container) {
  const el = document.createElement(vnode.tag);

  for (const key in vnode.props) {
    if (/^on/.test(key)) { // if key start with 'on', means its an event.
      el.addEventListener(
        key.substr(2).toLowerCase(), // Event name  :  onClick => click
        vnode.props[key]
      );

    }
  }


  if (typeof vnode.children === "string") {
    el.appendChild(document.createTextNode(vnode.children));
  } else if (Array.isArray(vnode.children)) {
    vnode.children.forEach(child => renderer(child, el));
  }

  container.appendChild(el);
}

renderer(vnode, document.body);
