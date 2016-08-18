export module Expressions
{
    var Item : ObjectExpression;
    var Now : DateTimeExpression;
    var Today : DateTimeExpression;

    export interface IExecutableExpression
    {
        serialize() : JSON;
    }

    export interface ObjectExpression extends IExecutableExpression
    {
        get(property: string) : Expression;
    }

    export interface Expression extends IExecutableExpression, ObjectExpression
    {
        eq(comp: Expression|number|string|Date) : BooleanExpression;
        ne(comp: Expression|number|string|Date) : BooleanExpression;
        gt(comp: Expression|number|string|Date) : BooleanExpression;
        lt(comp: Expression|number|string|Date) : BooleanExpression;
        ge(comp: Expression|number|string|Date) : BooleanExpression;
        le(comp: Expression|number|string|Date) : BooleanExpression;

        add(value: Expression|number) : Expression;
        sub(value: Expression|number) : Expression;
        mul(value: Expression|number) : Expression;
        div(value: Expression|number) : Expression;
        mod(value: Expression|number) : Expression;

        contains(comp: Expression|number|string|Date) : BooleanExpression;
        in(comp: Expression[]|number[]|string[]|Date[]) : BooleanExpression;

        all(lambda: BooleanExpression);
        any(lambda: BooleanExpression);
    }

    export interface DateTimeExpression extends Expression
    {
        parse(exp: string|Expression) : DateTimeExpression;
        addSeconds(exp: number|Expression): DateTimeExpression;            
        addMinutes(exp: number|Expression): DateTimeExpression;            
        addHours(exp: number|Expression): DateTimeExpression;            
        addDays(exp: number|Expression): DateTimeExpression;            
        addMonth(exp: number|Expression): DateTimeExpression;            
        addYears(exp: number|Expression): DateTimeExpression;            
    }

    export interface BooleanExpression extends IExecutableExpression
    {
        compile() : (item: any) => any;
    }

    export function parse(filter: JSON) : BooleanExpression;

    export function not(exp: BooleanExpression) : BooleanExpression;
    export function and(exp1: BooleanExpression, exp2: BooleanExpression, ...moreexp: BooleanExpression[]) : BooleanExpression;
    export function or(exp1: BooleanExpression, exp2: BooleanExpression, ...moreexp: BooleanExpression[]) : BooleanExpression;
    export function xor(exp1: BooleanExpression, exp2: BooleanExpression) :BooleanExpression;
}

export default Expressions;