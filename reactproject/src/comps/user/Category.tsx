import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CategoryData from '../../interfaces/CategoryData';
import { Link } from "react-router-dom";
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Category(props: CategoryData) {
    const classes = useStyles();
    // const categoryClick = () => {
    //     console.log("id", props.id)

    // }
    // const [category, setCategory] = useState<CategoryData>()
    return (
        <Link to={{ pathname: `/services/${props.id}` }} >
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>

                    </CardContent>
                </CardActionArea>

            </Card>
        </Link>
    )

}
