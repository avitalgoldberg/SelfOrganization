import React from 'react';
import Badge from '@material-ui/core/Badge';
import CategorySharpIcon from '@material-ui/icons/CategorySharp';
import './BadgeVisibility.css'

export default function BadgeVisibility() {
  const [count, setCount] = React.useState(1);

  return (
    <div className="parent11">
      <div id="a1" style={{ borderStyle: "solid", borderColor: "#312c77" }}>
        <Badge color="secondary" badgeContent={count}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <p style={{ color: "#312c77" }}>קטגוריות חדשות</p>
          <CategorySharpIcon fontSize="large" style={{ color: "#312c77" }} />
        </Badge>
      </div>
      <div id="a2" style={{ borderStyle: "solid", borderColor: "#312c77" }}>
        <Badge color="secondary" badgeContent={count}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <p style={{ color: "#312c77" }}>ספקים חדשים</p>
          <CategorySharpIcon fontSize="large" style={{ color: "#312c77" }} />
        </Badge>
      </div>
      <div id="a3" style={{ borderStyle: "solid", borderColor: "#312c77" }}>
        <Badge color="secondary" badgeContent={count}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <p style={{ color: "#312c77" }}>בקשות לפרסום</p>
          <CategorySharpIcon fontSize="large" style={{ color: "#312c77" }} />
        </Badge>
      </div>
    </div>
  );
}