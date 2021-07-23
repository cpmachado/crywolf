# crywolf

crywolf is a bot that monitors oscillations in currency using the [Uphold API].

**NOTE: Took build/test setup from <https://github.com/uphold/uphold-sdk-javascript>**



## Roadmap
1. Phase 1
  + [ ] Write a bot that:
    - [ ] Connects to the [Uphold public ticker].
    - [ ] Using ticker to extract information regarding the BTC-USD currency pair every 5 seconds.
    - [ ] Alert when there's an oscillation ≥ 0.01% regarding price, in either way.
  + [ ] Create README with setup.
2. Phase 2
  + [ ] Handle multiple currency pairs at the same at the same time.
  + [ ] Configurable to:
    - currency pair
    - fetch interval
    - price oscillation percentage
  + [ ] Test extensively
3. Phase 3
  + [ ] Dockerize application
  + [ ] Create a database to store alerts, with:
    - Bot configuration
    - timestamp


## LICENSE

```text
  MIT License

  Copyright (c) 2021 Carlos Augusto Gonçalves Collaço e Pinto Machado

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
```



[Uphold API]: https://uphold.com/en/developer/api/documentation/
[Uphold public ticker]: https://uphold.com/en/developer/api/documentation/#tickers

