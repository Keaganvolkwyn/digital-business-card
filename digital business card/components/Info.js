import React from "react"

export default function Info() {
    return(
        <div className="info--container">
            <img className="profile-image" src="https://byzantion.mypinata.cloud/ipfs/QmfBmrsUte51YfJKEvf5DtwWjryUycZo1ku1gFBwixP1Uj?img-width=700&img-fit=cover&img-quality=80&img-onerror=redirect&img-format=webp"/>
            <h1 className="info--name">Keagan Volkwyn</h1>
            <div className="info--job">Frontend Developer</div>
            <div className="info--website">KeaganVolkwyn.website</div>
            <div className="info--buttons">
                <button className="button-email">
                    <i className="fa fa-envelope"></i> Email
                </button>
                <button className="button-linkedin">
                    <i className="fa fa-linkedin-square"></i> LinkedIn                
                </button>
            </div>
        </div>
    )
}