import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./Home.css";
import Result from "../Result/Result";
import FunnyNumber from "../FunnyNumber/FunnyNumber";

const Home = () => {
  const { register, handleSubmit, reset } = useForm();

  const [showResult, setShowResult] = useState(false);
  const [alldata, setAlldata] = useState({});
  // Number Captcha
  const [firstNumberCaptcha, setFirstNumberCaptcha] = useState(0);
  const [secondNumberCaptcha, setSecondNumberCaptcha] = useState(0);
  const [captchaResult, setCaptchaResult] = useState(0);
  const [userSumNumber, setUserNumber] = useState(0);



 useEffect(() => {
  const generateRandomNumber = () => {
    const randomNum1 = Math.floor(Math.random() * 10) + 1;
    const randomNum2 = Math.floor(Math.random() * 10) + 1;
    setFirstNumberCaptcha(randomNum1);
    setSecondNumberCaptcha(randomNum2);
    const randomCaptchaResult = randomNum1 + randomNum2;
    setCaptchaResult(randomCaptchaResult);
  };
  generateRandomNumber();
}, []); 

const onSubmit = async data => {
  const alldata = {
    examination: data.examination,
    year: data.year,
    board: data.board,
    roll: data.roll,
    reg: data.reg,
  }
//  const examination = data.examination;
//  const year = data.year;
//  const board = data.board;
//  const roll = data.roll;
//  const reg = data.reg;
 const sumNumber = data.sumNumber;

 setAlldata(alldata);
 setUserNumber(sumNumber);
 reset();
 setShowResult(true);
 
}
  return (
    <div className="w-6/12 mx-auto mt-4 education-board-area">
      <div className="flex flex-row mb-8">
        <div className="header-logo basis-3/12">
          <img src="/assets/bd_logo.png" alt="img" />
        </div>
        <div className="header-content basis-9/12">
          <h1>Ministry of Education</h1>
          <h2>Intermediate and Secondary Education Boards Bangladesh</h2>
          <p>Unofficial Website of Education Board</p>
        </div>
      </div>
{

 showResult == false ?
    <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control-filde grid grid-cols-5 gap-4">
      <div className="flex justify-between col-span-2">
        <h3>Examination</h3>
        <span className="text-right">:</span>
      </div>

      <select {...register("examination")} className="mb-2 col-span-3">
        <option value="SSC/Dakhil/Equivalent" selected="">SSC/Dakhil/Equivalent</option>
        <option value="JSC/JDC">JSC/JDC</option>
        <option value="SSC/Dakhil">SSC/Dakhil</option>
        <option value="SSC(Vocational)">SSC(Vocational)</option>
        <option value="HSC/Alim">HSC/Alim</option>
        <option value="HSC(Vocational)">HSC(Vocational)</option>
        <option value="HSC(BM)">HSC(BM)</option>
        <option value="Diploma in Commerce">Diploma in Commerce</option>
        <option value="Diploma in Business Studies">Diploma in Business Studies</option>
      </select>
    </div>
    <div className="form-control-filde grid grid-cols-5 gap-4">
      <div className="flex justify-between col-span-2">
        <h3>Year</h3>
        <span className="text-right">:</span>
      </div>

      <select {...register("year")} className="mb-2 col-span-3">
        <option value="0000" selected="">
          Select One
        </option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>
        <option value="1999">1999</option>
        <option value="1998">1998</option>
        <option value="1997">1997</option>
        <option value="1996">1996</option>
      </select>
    </div>
    <div className="form-control-filde grid grid-cols-5 gap-4">
      <div className="flex justify-between col-span-2">
        <h3>Board</h3>
        <span className="text-right">:</span>
      </div>

      <select {...register("board")} className="mb-2 col-span-3" id="board">
        <option value="" selected="">
          Select One
        </option>
        <option value="Barisal">Barisal</option>
        <option value="Chittagong">Chittagong</option>
        <option value="Comilla">Comilla</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Dinajpur">Dinajpur</option>
        <option value="Jessore">Jessore</option>
        <option value="Mymensingh">Mymensingh</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Sylhet">Sylhet</option>
        <option value="Madrasah">Madrasah</option>
        <option value="Technical">Technical</option>
        <option value="DIBS(Dhaka)">DIBS(Dhaka)</option>
      </select>
    </div>
    <div className="form-control-filde grid grid-cols-5 gap-4">
      <div className="flex justify-between col-span-2">
        <h3>Roll</h3>
        <span className="text-right">:</span>
      </div>

      <input
      type="number"
        className="mb-2 col-span-3"
        {...register("roll", { required: true, maxLength: 20 })}
        required
      />
    </div>
    <div className="form-control-filde grid grid-cols-5 gap-4">
      <div className="flex justify-between col-span-2">
        <h3>Reg: No</h3>
        <span className="text-right">:</span>
      </div>

      <input
       type="number"
        className="mb-2 col-span-3"
        {...register("reg", { required: true, 
          maxLength: 2
        })}
        required
      />
    </div>
    <div className="form-control-filde grid grid-cols-5 gap-4">
      <div className="flex justify-between col-span-2">
        <h3>{firstNumberCaptcha} + {secondNumberCaptcha}</h3>
        <span className="text-right">:</span>
      </div>

      <input
        className="mb-2 col-span-3"
        type="number"
        {...register("sumNumber", { required: true, maxLength: 20 })}
        required
      />
    </div>
    <div className="flex gap-3 float-end">
      <input type="reset" value="Reset" />
      <input type="submit" value="Submit" />
    </div>
  </form>
  : (captchaResult == userSumNumber) ? 
  <Result alldata={alldata}/>
   : 
  <FunnyNumber
   firstNumberCaptcha={firstNumberCaptcha} secondNumberCaptcha={secondNumberCaptcha}
   userSumNumber={userSumNumber}
   />
}
      
      <div className="footer-area flex justify-between items-center py-6">
        <p className="ms-3">
          ©2005-2024 Ministry of Education, All rights reserved.
        </p>
        <div className="flex items-center pr-10">
          <p className="mr-6">Powered by</p>
          <img src="/assets/tbl_logo.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
