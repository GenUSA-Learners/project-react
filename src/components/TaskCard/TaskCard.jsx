import { useCallback, useEffect, useState } from 'react';
import { Button, Card, Label, Icon } from 'semantic-ui-react';

import './TaskCard.css';

const TaskCard = ({ name, description, assigned, dueDate, status }) => {
  const handleClick = useCallback(() => {}, []);

  return (
    <Card>
      <Card.Content>
        <Label floated="right">
          <Icon name={'check' || 'list'} size="small" /> {status}
        </Label>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{assigned}</Card.Meta>
        <Card.Description>{description}</Card.Description>
        <Card.Meta floated="right">{dueDate}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons actions-container">
          <Button basic color="green">
            Mark as Done
          </Button>
          <Button basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default TaskCard;
