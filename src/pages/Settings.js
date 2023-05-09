import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
// import localStorage from 'localStorage';
const localStorage = window.localStorage;


export default function Setting() {



  const getLocalStorageItems = () => {
    const list = localStorage.getItem('list');
    if (list) {
      return (JSON.parse(list))
    }
    else {
      return ({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--primary-color": "rgb(255,0,86)",
        "--font-size": "16px",
        "--animation-speed": 1
      })
    }
  }
  const [settings, setSettings] = useState(
    getLocalStorageItems()
  )
  useEffect(() => {
    let _settings = { ...settings }
    if (document.documentElement.style) {
      for (let key in _settings) {
        document.documentElement.style.setProperty(key, settings[key])
      }
    }
    localStorage.setItem('list', JSON.stringify(settings))
  }, [settings])






  //background themes
  const getChange = () => {
    const change = localStorage.getItem('change');
    if (change) {
      return (JSON.parse(change))
    }
    else {
      return 0
    }
  }
  const [theme, setTheme] = useState(getChange());
  function changeTheme(i) {
    const _theme = { ...themes[i] }
    localStorage.setItem('change', JSON.stringify(i))
    setTheme(i === 0 ? 0 : 1)
    let _settings = { ...settings }
    for (let key in _theme) {
      _settings[key] = _theme[key]
    }
    setSettings(_settings)
  }
  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0,0,0,0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    }
  ]



  //change color
  const storeChangeColor = () => {
    const color = localStorage.getItem('color');
    if (color) {
      return (JSON.parse(color))
    }
    else {
      return 0
    }
  }
  function changeColor(index) {
    const color = primaryColors[index]
    let _settings = { ...settings }
    _settings["--primary-color"] = color
    localStorage.setItem('color', JSON.stringify(index))
    setPrimaryColorsIndex(index)
    setSettings(_settings)
  }
  const [primaryColorsIndex, setPrimaryColorsIndex] = useState(storeChangeColor);
  const primaryColors = [
    "rgb(255,0,86)",
    "rgb(33,150,243)",
    "rgb(255,193,7)",
    "rgb(0,200,83)",
    "rgb(156,39,176)"
  ];




  //change font size
  const changeFont = () => {
    const font = localStorage.getItem('font');
    if (font) {
      return (JSON.parse(font))
    }
    else {
      return 1
    }
  }

  function changefontSize(i) {
    const _font = FontSize[i]
    let _settings = { ...settings }
    _settings["--font-size"] = _font.value
    localStorage.setItem('font', JSON.stringify(i))
    setFontsize(i)
    setSettings(_settings)
  }
  const [fontsize, setFontsize] = useState(changeFont());
  const FontSize = [
    {
      title: "Small",
      value: "12px"
    },
    {
      title: "Medium",
      value: "16px"
    },
    {
      title: "Large",
      value: "20px"
    }
  ]




  //change animation speed
  const changeAnimation = () => {
    const animation = localStorage.getItem('animation');
    if (animation) {
      return (JSON.parse(animation))
    }
    else {
      return 1
    }
  }

  function changeAnimationSpeed(i) {
    const _speed = AnimationSpeed[i]
    let _settings = { ...settings }
    _settings["--animation-speed"] = _speed.value
    localStorage.setItem('animation', JSON.stringify(i))
    setAnimationspeed(i)
    setSettings(_settings)
  }
  const [animationspeed, setAnimationspeed] = useState(changeAnimation());
  const AnimationSpeed = [
    {
      title: "Slow",
      value: "2s"
    },
    {
      title: "Medium",
      value: "1s"
    },
    {
      title: "Fast",
      value: ".5s"
    }
  ]



  return (
    <div>
      <div className="secttion d-block">
        <h2>Preferred Themes</h2>
        <div className="options-conatiner">
          <div className="option light" onClick={() => changeTheme(0)}>
            {theme === 0 && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>)
            }
          </div>
          <div className="option dark" onClick={() => changeTheme(1)}>
            {theme === 1 && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>)
            }
          </div>
        </div>
      </div>
      <div className="secttion d-block">
        <h2>Primary Color</h2>
        <div className="options-conatiner">
          {primaryColors.map((color, index) => {
            return (
              <div className="option" key={index} style={{ backgroundColor: color }} onClick={() => changeColor(index)}>
                {primaryColorsIndex === index && (
                  <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>)
                }
              </div>
            )
          }
          )}
        </div>
      </div>
      <div className="secttion d-block">
        <h2>Font Size</h2>
        <div className="options-conatiner">
          {FontSize.map((size, index) => {
            return (
              <button className="btn" key={index} onClick={() => changefontSize(index)}>
                {size.title}
                {fontsize === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
              </button>
            )
          })}
        </div>
      </div>
      <div className="secttion d-block">
        <h2>Animation Speed</h2>
        <div className="options-conatiner">
          {AnimationSpeed.map((speed, index) => {
            return (
              <button className="btn" key={index} onClick={() => { changeAnimationSpeed(index) }}>
                {speed.title}
                {animationspeed === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
