import React from "react";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiWordpress } from "react-icons/di";
import { DiAtlassian } from "react-icons/di";

export default function Skills() {
    return(
        <div className="skills--top section-container">
        <h1>Skills</h1>
            <div className="skills">
                <DiHtml5 className="icon"/>
                <DiCss3 className="icon"/>
                <DiJsBadge className="icon"/>
                <DiReact className="icon"/>
                <DiNodejsSmall className="icon"/>
                <DiGithubBadge className="icon"/>
                <DiBootstrap className="icon"/>
                <DiWordpress className="icon"/>
                <DiAtlassian className="icon"/>
            </div>   
        </div>
    )
}