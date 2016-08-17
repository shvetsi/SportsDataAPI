declare module Expressions
{
    var Item : Expression;
    var Now : DateTimeExpression;
    var Today : DateTimeExpression;

    export interface IExecutableExpression
    {
        oper() : JSON;
        compile() : (item: any) => any;
    }

    export interface Expression extends IExecutableExpression
    {
        get(property: string) : Expression;
        eq(comp: Expression|number|string|Date) : BooleanExpression;
        ne(comp: Expression|number|string|Date) : BooleanExpression;
        gt(comp: Expression|number|string|Date) : BooleanExpression;
        lt(comp: Expression|number|string|Date) : BooleanExpression;
        ge(comp: Expression|number|string|Date) : BooleanExpression;
        le(comp: Expression|number|string|Date) : BooleanExpression;

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
        not(exp: BooleanExpression) : BooleanExpression;
        and(exp1: BooleanExpression, exp2: BooleanExpression, ...moreexp: BooleanExpression[]) : BooleanExpression;
        or(exp1: BooleanExpression, exp2: BooleanExpression, ...moreexp: BooleanExpression[]) : BooleanExpression;
        xor(exp1: BooleanExpression, exp2: BooleanExpression) :BooleanExpression;
    }
}
