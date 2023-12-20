class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;
    }
    addPoint(point) {
        this.points.push(point);
    }
    addSegment(segment) {
        this.segments.push(segment);
    }
    tryAddSegment(seg) {
        if (!this.containsSegment(seg)) {
            this.addSegment(seg);
            return true;
        }
        return false;
    }
    containsSegment(seg) {
        return this.segments.find((s) => s.equals(seg));
    }
    containsPoint(point) {
        return this.points.find((p) => p.equals(point));
    }
    tryAddPoint(point) {
        if (!this.containsPoint(point)) {
            this.addPoint(point);
            return true;
        }
        return false;
    }
    draw(ctx) {

        for(const seg of this.segments) {
            seg.draw(ctx)
        }

        for(const point of this.points) {
            point.draw(ctx);
        }
    }
}