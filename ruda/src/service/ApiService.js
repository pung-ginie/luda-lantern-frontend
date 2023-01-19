import {useState} from "react";
import { API_BASE_URL } from "../api-config";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const USER_INFO = "USER_INFO";




export const call = (api, method, request) => {
    let headers = new Headers({
        "Content-Type": "application/json",
    });

    //로컬 스토리지 ACESS TOKEN 
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken && accessToken !== null) {
        headers.append("Authorization", "Bearer " + accessToken);
    }

    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if (request) {
        // GET method
        options.body = JSON.stringify(request);
    }
    return fetch(options.url, options)
        .then((response) => {
           

            return response.json().then((json) => {
                if (!response.ok) {
                    // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
                    return Promise.reject(json);
                }
                return json;
            })
        }
        )
        .catch((error) => {
            // 추가된 부분
            console.log(error.status);
            if (error.status === 403) {
                window.location.href = "/login"; // redirect
            }
            return Promise.reject(error);
        });
}

export const signin = (userDTO) => {
    call("/v1/auth/signin", "POST", userDTO)
        .then((response) => {

            if (response.token) {
                //로컬 스토리지에 토큰 저장
                localStorage.setItem(ACCESS_TOKEN, response.token);
                localStorage.setItem(USER_INFO, {
                    email: response.email,
                    id: response.id,
                    username: response.username,
                });
                localStorage.setItem("username", response.username);
                //token이 존재하는 경우 home 화면으로 redirect -> 추후 수정 !!
                window.location.href = "/";
            }
        });
}

export const signout = () => {
    localStorage.setItem(ACCESS_TOKEN, null);
    window.location.href = "/login";
}

export const signup = (userDTO) => {
    return call("/v1/auth/signup", "POST", userDTO);
}

export const getMe = () => { // 사용자 정보 확인
    return localStorage.getItem(USER_INFO);
}

