# AWS APPSYNC DYNAMODB UPDATE VTL EXAMPLE

```vtl
#set($authCondition = {
  "expression": "#userId = :userId",
  "expressionNames": {},
  "expressionValues": {}
})
#if( $authCondition && $authCondition.expression != "" )
  #set( $condition = $authCondition )
  $util.qr($condition.put("expression", "$condition.expression AND attribute_exists(#id)"))
$util.qr($condition.expressionNames.put("#id", "id"))
#else
#set( \$condition = {
"expression": "attribute_exists(#id)",
"expressionNames": {
"#id": "id"
},
"expressionValues": {}
} )
#end
```

## Automatically set the updatedAt timestamp. \*\*

```vtl
$util.qr($context.args.input.put("updatedAt", $util.time.nowISO8601()))
$util.qr(\$context.args.input.put("\_\_typename", "Collection"))
```

## Update condition if type is @versioned \*\*

```vtl
#if( $versionedCondition )
  $util.qr($condition.put("expression", "($condition.expression) AND $versionedCondition.expression"))
  $util.qr($condition.expressionNames.putAll($versionedCondition.expressionNames))
$util.qr($condition.expressionValues.putAll($versionedCondition.expressionValues))
#end
#set( $expNames = {} )
#set( $expValues = {} )
#set( $expSet = {} )
#set( $expAdd = {} )
#set( $expRemove = [] )
#foreach( $entry in $util.map.copyAndRemoveAllKeys($context.args.input, ["id"]).entrySet() )
#if( $util.isNull($entry.value) )
#set( $discard = $expRemove.add("#$entry.key") )
$util.qr($expNames.put("#$entry.key", "$entry.key"))
#else
$util.qr($expSet.put("#$entry.key", ":$entry.key"))
$util.qr($expNames.put("#$entry.key", "$entry.key"))
$util.qr($expValues.put(":$entry.key", $util.dynamodb.toDynamoDB($entry.value)))
#end
#end
#set( $expression = "" )
#if( !$expSet.isEmpty() )
#set( $expression = "SET" )
#foreach( $entry in $expSet.entrySet() )
#set( $expression = "$expression $entry.key = $entry.value" )
#if( $foreach.hasNext() )
      #set( $expression = "$expression," )
#end
#end
#end
#if( !$expAdd.isEmpty() )
#set( $expression = "$expression ADD" )
#foreach( $entry in $expAdd.entrySet() )
#set( $expression = "$expression $entry.key $entry.value" )
#if( $foreach.hasNext() )
      #set( $expression = "$expression," )
#end
#end
#end
#if( !$expRemove.isEmpty() )
#set( $expression = "$expression REMOVE" )
#foreach( $entry in $expRemove )
#set( $expression = "$expression $entry" )
    #if( $foreach.hasNext() )
#set( $expression = "$expression," )
#end
#end
#end
#set( $update = {} )
$util.qr($update.put("expression", "$expression"))
#if( !$expNames.isEmpty() )
  $util.qr($update.put("expressionNames", $expNames))
#end
#if( !$expValues.isEmpty() )
$util.qr($update.put("expressionValues", $expValues))
#end
```
