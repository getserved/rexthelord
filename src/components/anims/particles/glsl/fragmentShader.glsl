precision highp float;
varying vec3 v_pos;
varying float v_alpha;

void main() {

  float len = length(gl_PointCoord.xy - .5) * 2.0;
  float c = 1.0 - len;
  gl_FragColor = vec4(c, c, c, v_alpha);


}
