var Y = require("../build/y");
var Observable = Y.Observable;
var Rx = require("rx");
var WallClock = require("../build/WallClock");
var RSVP = require("rsvp");

describe("Observable", function(){

//    describe("ayncMap", function(){
//
//        var subscription;
//        afterEach(function(){
//            if(subscription){
//                if(Array.isArray(subscription)){
//                    subscription.forEach(function(x){
//                        x.dispose();
//                    })
//                } else {
//                    subscription.dispose();
//                }
//            }
//        });
//
//        it("should be able to map a promise", function(done){
//            subscription = Observable.return(1).asyncMap(function(x){
//                return RSVP.resolve(x);
//            }).subscribe(function(x){
//                expect(x).equal(1);
//                done();
//            });
//            WallClock.next();
//        });
//
//        it("should be able to map an array of promises", function(done){
//            subscription = Observable.fromArray([1,2,3]).asyncMap(function(x){
//                return RSVP.resolve(x);
//            }).collect().subscribe(function(x){
//                expect(x).deep.equal([1,2,3]);
//                done();
//            });
//            WallClock.next();
//        });
//
//        it("should be able to map an array of promises multiple times", function(){
//            subscription = Observable.fromArray([1,2,3]).asyncMap(function(x){
//                return RSVP.resolve(x);
//            }).map(function(x){
//                return x+1;
//            }).asyncMap(function(x){
//                return RSVP.resolve(x);
//            }).subscribe(function(x){
//                expect(x).equal([2,3,4]);
//                done();
//            });
//            WallClock.next();
//        });
//
//        it("should be able to map many arrays of promises", function(done){
//            var ob1 = Observable.fromArray([1,2,3]).asyncMap(function(x){
//                return RSVP.resolve(x);
//            }).map(function(x){
//                return x+1;
//            }).asyncMap(function(x){
//                return RSVP.resolve(x);
//            });
//
//            WallClock.next();
//
//            var ob2 = Observable.fromArray([6,7]).asyncMap(function(x){
//                return RSVP.resolve(x);
//            }).map(function(x){
//                return x+1;
//            }).asyncMap(function(x){
//                return RSVP.resolve(x);
//            });
//
//            WallClock.next();
//
//            var actual = [];
//            subscription = Observable.merge(
//                ob1.collect(), ob2.collect()
//            ).subscribe(function(x){
//                actual.push(x);
//                if(actual.length===2) {
//                    expect(actual.sort(function(xs,ys){
//                        return ys.length - xs.length;
//                    })).deep.equal([
//                        [2,3,4],[7,8]
//                    ]);
//                    done();
//                }
//            });
//        });

//        it("should be able to map many arrays of promises with different contexts", function(done){
//            var ob1 = Observable.fromArray([1,2,3]).asyncMap(function(x){
//                return RSVP.resolve(x);
//            }).map(function(x){
//                return x+1;
//            }).asyncMap(function(x){
//                return RSVP.resolve(x);
//            });
//
//            WallClock.next("context1");
//
//            var ob2 = Observable.fromArray([6,7]).asyncMap(function(x){
//                return RSVP.resolve(x);
//            }).map(function(x){
//                return x+1;
//            }).asyncMap(function(x){
//                return RSVP.resolve(x);
//            });
//
//            WallClock.next("context2");
//
////            var sub1 = ob1.buffer(WallClock.tick).collect().subscribe()
//
//
//        });
//    });

    describe("scatter", function(){

        var subscription;
        afterEach(function(){
           subscription = Array.isArray(subscription) ? subscription : [subscription];
           subscription.forEach(cancel);

           function cancel(subscription) {
               if(subscription.dispose) {
                   subscription.dispose();
               }
           }
        });

        it("should be done in a unit d time if operation is sync", function(done){
            subscription = [];
            subscription[0] = WallClock.tick.subscribe(function(x){
                expect(x).equal("Document");
                done();
            });
            var subject = new Rx.Subject();
            subscription[1] = subject.scatter().subscribe(function(){});
            subject.onNext([1,2,3]);
        });

        it("should scatter an iterable", function(done){
            var actual = [];
            subscription = Rx.Observable.return([1,2,3]).scatter().subscribe(function(x){
                actual.push(x);
                if(actual.length === 3) {
                    expect(actual).deep.equal([1,2,3]);
                    done();
                }
            });
        });

    });
});