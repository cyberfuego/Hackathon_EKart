import { ImageURISource, Image } from "react-native";

export interface User{
    name: Name
    gender: String
    picture : Picture
    email : String
    }
    
    export interface Name{
    title: String,
    first: String,
    last: String,
    
    }
    export interface Picture{
        large : String,
        medium : String,
        thumbnail : String
    }