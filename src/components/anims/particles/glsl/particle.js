var deepMixin = require('deep-mixin')

define([
        'text!./vs.glsl',
        'text!./fs.glsl'
    ],
    function(vs, fs, deepMixIn) {
        console.log(vs);
        var _script;
        var _dui;

        var _cfg = {
            noiseSpeed: 0.2,
            speed: 0.25
        };

        function init(script) {
            _script = deepMixIn(script, {
                vs: vs,
                fs: fs,
                amount: 36000
            });
            _script.init();
            _script.createVertexBuffer();
            _script.createIndexBuffer();

            _script.addUniform('u_time', 'f');
            _script.addUniform('u_twirl', 'f');
            _script.addUniform('u_noise_time', 'f');
            _script.uniforms.u_twirl.value = 0.3;
            _script.uniforms.u_noise_time.value = 0;
            _script.addDUI();
            _dui = _script.dui;
            _dui.add(_script.uniforms.u_twirl, 'value', {min: -1, max: 1, label: 'twirl'});
            _dui.add(_cfg, 'noiseSpeed', {min: 0, max: 1, label: 'noise speed'});
            _dui.add(_cfg, 'speed', {min: -1, max: 1, label: 'speed'});
            _dui.add(_script.uniforms.u_zoom, 'value', {min: 0, max: 1, label: 'zoom'});

        }

        function render() {
            _script.uniforms.u_time.value += _cfg.speed;
            _script.uniforms.u_time.update();
            _script.uniforms.u_twirl.update();
            _script.uniforms.u_noise_time.value += _cfg.noiseSpeed;
            _script.uniforms.u_noise_time.update();
            _script.render();
        }

        function resize() {
            _script.resize();

        }

        return {
            init: init,
            render: render,
            resize: resize,
        };
    }
);
