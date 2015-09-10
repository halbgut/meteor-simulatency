# meteor-simulatency
Adds a lag to all connections you make to the server

Simple as that. You can set the lag using `simulatency.setLag(Nms)` on your client to modify the lag.

## Examples

Turning on a latency:

_client_

```js
simulatency.setLag(100)
```

Turning it off again:

_client_

```js
simulatency.setLag(0)
```


