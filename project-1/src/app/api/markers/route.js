import markers from '../../data/markers.json';

export function GET() {
  return Response.json(markers);
}
