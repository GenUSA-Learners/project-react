import { useCallback, useEffect, useState } from 'react';
import { Button, Card, Label, Icon } from 'semantic-ui-react';

import './TaskCard.css';

const TaskCard = ({
  name,
  description,
  assigned,
  dueDate,
  status,
  handleClickDone,
  handleClickDelete,
}) => {
  return (
    <Card className="task-card">
      <Card.Content>
        <Label
          className={`task-label right${
            status === 'TODO' ? ' todo' : ' success'
          }`}
        >
          <Icon name={status === 'TODO' ? 'list' : 'check'} size="small" />
          {status}
        </Label>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{assigned}</Card.Meta>
        <Card.Description className="task-description">
          {description}
        </Card.Description>
        <Card.Meta className="task-dueDate" textAlign="right">
          {dueDate}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons actions-container">
          {status !== 'DONE' && (
            <Button
              basic
              className="action-btn"
              color="green"
              onClick={handleClickDone}
            >
              Mark as Done
            </Button>
          )}
          <Button
            basic
            className="action-btn"
            color="red"
            onClick={handleClickDelete}
          >
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default TaskCard;
