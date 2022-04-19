import React, {useState} from "../_snowpack/pkg/react.js";
import getLink from "./api/requests.js";
import Loader from "./assets/loader.svg.proxy.js";
import Copy from "./assets/copy.svg.proxy.js";
import Tick from "./assets/tick.svg.proxy.js";
function App() {
  const [input, setInput] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [disable, setDisable] = useState("disabled");
  const handleKeyDown = (event) => {
    validURL(event.target.value);
    setInput(event.target.value);
  };
  const validURL = (string) => {
    const pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%\/.\w-]*)?\??(?:[-+=&;%@.\w]*)#?\w*)?)/gm);
    let isValidURL = !!pattern.test(string);
    if (isValidURL !== true) {
      setDisable("disabled");
    } else {
      setDisable("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    getShortLink();
  };
  const getShortLink = async () => {
    const formatStr = input.toString().toLowerCase().trim();
    const ourURL = `${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_URL}`;
    const shortenedLink = await getLink(ourURL, formatStr);
    setLoading(false);
    setLink(shortenedLink.data.result.full_short_link);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, copied ? /* @__PURE__ */ React.createElement("div", {
    className: "px-5 py-3 flex bg-green-100 items-center text-green-600 absolute w-full top-0 left-0 right-0 z-10"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Tick,
    className: "h-5 w-5 mr-2",
    alt: "tick icon"
  }), "Awesome! Your link has been copied.") : /* @__PURE__ */ React.createElement(React.Fragment, null)), /* @__PURE__ */ React.createElement("div", {
    className: "min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-lg w-full space-y-8 form-conatiner container demo animated",
    id: "box"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", {
    className: "mt-6 text-left text-3xl font-extrabold text-gray-900"
  }, "Short URL Generator"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-left text-1xl text-gray-400"
  }, "URL shortener built to generate short links that creates better click impression.")), /* @__PURE__ */ React.createElement("form", {
    className: "mt-8 space-y-6",
    action: "#",
    method: "POST",
    onSubmit: (e) => handleSubmit(e)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md shadow-sm -space-y-px"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "link-text",
    className: "sr-only"
  }, "link text"), /* @__PURE__ */ React.createElement("input", {
    id: "link-text",
    name: "text",
    type: "text",
    autoComplete: "text",
    required: true,
    value: input,
    onChange: handleKeyDown,
    className: "appearance-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-base",
    placeholder: "Paste your long link here"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: disable ? "cursor-not-allowed group disabled w-full flex justify-center py-4 px-5 border border-transparent text-lg font-medium rounded-md text-white bg-gray-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" : "group w-full flex justify-center py-4 px-5 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
  }, loading ? /* @__PURE__ */ React.createElement("img", {
    src: Loader,
    className: "animate-spin h-6 w-6 mx-auto",
    alt: "loading ..."
  }) : /* @__PURE__ */ React.createElement(React.Fragment, null, "Create a Link")))), /* @__PURE__ */ React.createElement("div", null, link !== "" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "w-full bg-gray-50 text-gray-400 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-sm flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200 hover:bg-green-50 hover:border-green-300",
    onClick: () => {
      if (link !== void 0) {
        navigator.clipboard.writeText(link);
      }
      setCopied(true);
      setInterval(() => {
        setCopied(false);
      }, 5e3);
    }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-900"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "hidden sm:inline text-gray-500",
    "aria-hidden": "true"
  }), link), /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "(click to copy to clipboard)"), /* @__PURE__ */ React.createElement("img", {
    src: Copy,
    className: "h-5 w-5",
    alt: "copy link"
  }))) : /* @__PURE__ */ React.createElement(React.Fragment, null)))));
}
export default App;
