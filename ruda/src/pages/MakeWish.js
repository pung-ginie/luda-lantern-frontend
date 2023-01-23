import React, {useState, useRef} from "react";
import "../styles/MakeWish.css";
import {useLocation} from "react-router-dom";
import axios from "axios";

const MakeWish = ({onCreate}) => {

  const location = useLocation();

  let lantetnNumber = location.state.lanternType.lanternType;

  if(lantetnNumber === 'A'){
    lantetnNumber = 1;

  }else if(lantetnNumber === 'B'){
    lantetnNumber = 2;
  }else{
    lantetnNumber = 3;
  }
  const [toggle , setToggle] = useState(true);
  const textInput = useRef();

  const [mylantern, setLantern] = useState({  
    wish: "",
    public: toggle,
    lantetnNumber : lantetnNumber,
  }); 
  const isOpen = (e) => {
    setLantern({
      ...mylantern,
      [e.target.name] : e.target.checked,
  });
    setToggle((toggle) => !toggle);
    console.log(toggle);
  };

  const handleChangeState = (e) => {
    setLantern({
        ...mylantern,
        [e.target.name] : e.target.value,
    });
}
  const handleSubmit = (e)=> {
    console.log(mylantern);

    if(mylantern.public === undefined){
      alert("공개 여부를 선택해 주세요");
      return;
    }
    if(mylantern.wish.length < 3){
        textInput.current.focus();
        return;
    }

    onCreate(mylantern.lantetnNumber, mylantern.wish, mylantern.public);

    axios.post('http://luda-lantern-api-service.ap-northeast-2.elasticbeanstalk.com/v1/lantern/', { 
      public : mylantern.public,
      lantetnNumber : mylantern.lantetnNumber,
      wish : mylantern.wish,
    }).then(function(response){
      console.log(response);
      document.location.href = "/flylantern";
  }).catch(function(error){
    console.log(error);
    alert("소원 가능 갯수를 넘으셨습니다! ");
    document.location.href = "/";
  });
    alert("complete");
};

  return <div className="wrapper_wish">
        <h2>소원적기</h2>
        <p>종이에 소원을 적어보세요</p>
        <div class="onoff-switch-container">
          <input name="is_public" value={mylantern.public} type="checkbox" id="onoff-switch1" checked={!toggle} onChange={isOpen}  />
          <label for="onoff-switch1">{toggle === true ? "비공개": "공개" } </label> 
        </div>
        <textarea ref={textInput} name="wish" value={mylantern.wish} className="materialize-textarea" 
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