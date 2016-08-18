import {Expressions} from './Expression.d';


/**
 *  Filter build concept
 * 
 * **/

/*
    for object like

    {
        property1: 10,
        property2: 
        {
            subpropery1: 12,
            subpropery2: 33
        }
        property3: new Date('1990-01-01')
    }

*/

Expressions.Item.get("property1").eq(10);   // => true
Expressions.Item.get("property2").get("subpropery2").sub(23).eq(10);  // => true
Expressions.Item.get("property2").get("subpropery3").eq(10);  // => false, there is no such property
Expressions.Item.get("property2").get("subpropery3").ne(10);  // => also false, there is no such property

Expressions.and(Expressions.Item.get("property1").eq(10), Expressions.Item.get("property2").get("subpropery2").sub(23).eq(10)); // => true
 
Expressions.Item.get("property3").lt(Expressions.Now.addDays(-100)); // => true 