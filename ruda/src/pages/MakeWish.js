import React, {useState, useRef} from "react";
import "../styles/MakeWish.css";
import {useLocation} from "react-router-dom";
import axios from "axios";

const MakeWish = ({onCreate}) => {

  const location = useLocation();
  //console.log(location);

  const lantern_number = location.state.lanternType.lanternType;
  console.log(lantern_number);

  const [toggle , setToggle] = useState(undefined);
  const textInput = useRef();

  const [state, setState] = useState({  
    wish: "",
    is_public: toggle,
    lantern_number : lantern_number,
  }); 

//처음에 언디파인으로 줘서 두번 눌러야 true/false 값이 지정됨  여기 이상!!!
  const isOpen = (e) => {
    setToggle((toggle) => !toggle);
    console.log(toggle);

    setState({
      ...state,
      [e.target.name] : toggle,
  });
  };

  const handleChangeState = (e) => {
    setState({
        ...state,
        [e.target.name] : e.target.value,
    });
}
  const handleSubmit = (e)=> {
    console.log(state);
    if(state.is_public === undefined){
      alert("공개 여부를 선택해 주세요");
      return;
    }
    if(state.wish.length < 3){
        textInput.current.focus();
        return;
    }
    onCreate(state.lantern_number, state.wish, state.is_public);

    axios.post('http://luda-lantern-api-service.ap-northeast-2.elasticbeanstalk.com/v1/lantern/', { 
      is_public : state.is_public,
      lantern_number : state.lantern_number,
      wish : state.wish,
    }).then(function(response){
      console.log(response);
    document.location.href = "/flylantern/" + lantern_number;
  }).catch(function(error){
    console.log(error);
  });
    alert("complete");
};

  return <div className="wrapper_wish">
        <h2>소원적기</h2>
        <p>종이에 소원을 적어보세요</p>
        <div class="onoff-switch-container">
          <input name="is_public" value={state.is_public} type="checkbox" id="onoff-switch1" checked={!toggle} onChange={isOpen}  />
          <label for="onoff-switch1">{toggle === true ? "비공개": "공개" } </label> 
        </div>
        <textarea ref={textInput} name="wish" value={state.wish} className="materialize-textarea" 
        placeholder="소원을 적으면 소원이 이루어집니다." onChange={handleChangeState}>
          </textarea>
          <div className="button_wrapper">
          <button className="wish_button" onClick={handleSubmit}>완료하기</button>
          </div> 
    </div>
}

MakeWish.defaultProps={
  isPublic : true //디폴트 값
}

export default MakeWish;
