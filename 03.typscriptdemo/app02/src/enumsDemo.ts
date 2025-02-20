const enumsDemofunction = function(){

    enum concerns{
        YES, NO, ALRIGHT
    };

    console.log(concerns.YES);
    console.log(concerns.NO);
    console.log(concerns.ALRIGHT);

    enum directions {
        NORTH = 1, SOUTH,EAST, WEST
    }

    console.log(directions.NORTH);
    console.log(directions.SOUTH);
    console.log(directions.EAST);
    console.log(directions.WEST);

    enum quarters {
        Q1 = 0,
        Q2 = 90,
        Q3 = 180,
        Q4 = 270
    }

    console.log(quarters.Q1);
    console.log(quarters.Q2);
    console.log(quarters.Q3);
    console.log(quarters.Q4);

    enum gender {
        LADY = "LADY",
        GENT = "GENBT"
    }

    console.log(gender.LADY);
    console.log(gender.GENT);
}

export default enumsDemofunction;