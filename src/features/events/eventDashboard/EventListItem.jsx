import React from "react";
import { Item, Segment } from "semantic-ui-react";

export default function EventListItem() {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        Hey 1
                    </Item>
                    <Item>
                        Hey 2
                    </Item>
                </Item.Group>
            </Segment>
        </Segment.Group> 
    )
}