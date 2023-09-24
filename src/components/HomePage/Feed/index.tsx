import { useState } from "react";
import UserPost from "../../UserPost"
import Friends from "./Friends"
import WhatsOnYourMind from "./WhatsOnYourMind"
import { Container } from "./styles"

function Feed() {

    return (
        <Container>

            <div className="mainFeed">
                <WhatsOnYourMind />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
                <UserPost />
            </div>

            <Friends />

        </Container>
    )
}

export default Feed